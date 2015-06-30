package com.relic.app.sitedog.service;

import com.relic.app.sitedog.common.Role;
import com.relic.app.sitedog.domain.User;
import com.relic.app.sitedog.exception.UserExistsException;
import com.relic.app.sitedog.repository.UserRepository;
import com.relic.app.sitedog.security.TokenAuthenticationService;
import com.relic.app.sitedog.security.UserAuthentication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by xiaoj7 on 2015/6/19.
 */
@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private UserDetailsService userDetailsService;
    private TokenAuthenticationService tokenAuthenticationService;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, UserDetailsService userDetailsService, TokenAuthenticationService tokenAuthenticationService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userDetailsService = userDetailsService;
        this.tokenAuthenticationService = tokenAuthenticationService;
    }

    @Override
    public User signup(User user, HttpServletResponse response) throws UserExistsException {

        Assert.notNull(user);
        String rawPassword = user.getPassword();
        user.setPassword(passwordEncoder.encode(rawPassword));
        user.setRole(Role.USER);
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new UserExistsException();
        }
        logger.info("save user:" + user.toString());
        // save user to db
        User u = userRepository.save(user);

        // load user and set auth so that user does not to login again after signup
        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUsername());
        UserAuthentication userAuthentication = new UserAuthentication(userDetails);
        tokenAuthenticationService.addAuthentication(response, userAuthentication);

        return u;
    }
}
