package com.relic.app.sitedog.web.controller;


import com.relic.app.sitedog.domain.User;
import com.relic.app.sitedog.exception.UserExistsException;
import com.relic.app.sitedog.security.CurrentUser;
import com.relic.app.sitedog.security.UserAuthentication;
import com.relic.app.sitedog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by xiaoj7 on 2015/6/19.
 */
@RestController
public class UserController {

    private UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/api/signup", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> signup(@RequestBody User user, HttpServletResponse response) throws UserExistsException {
        System.out.println(user);
        userService.signup(user, response);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/api/users/current", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Object getCurrentUser(@CurrentUser Authentication authentication) {
        if (authentication instanceof UserAuthentication) {
            return authentication.getPrincipal();
        }
        return SecurityContextHolder.getContext().getAuthentication();
    }


}
