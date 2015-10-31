package com.relic.app.sitedog;


import com.relic.app.sitedog.common.Role;
import com.relic.app.sitedog.domain.User;
import com.relic.app.sitedog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import javax.annotation.PostConstruct;

/**
 * Created by Jason on 6/12/15.
 */
@SpringBootApplication
@EnableRedisHttpSession
public class Application {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @PostConstruct
    public void init() {
        System.out.println("Initializing data");
        User jason = User.of(1L, "jason", passwordEncoder.encode("password"), "jason@jason.com", Role.ADMIN);
        User john = User.of(2L, "john", passwordEncoder.encode("password"), "john@john.com", Role.USER);
        User phoenix = User.of(3L, "phoenix", passwordEncoder.encode("password"), "yunjiang@jiang.com", Role.ADMIN);
        userRepository.save(jason);
        userRepository.save(john);
        userRepository.save(phoenix);
    }

}
