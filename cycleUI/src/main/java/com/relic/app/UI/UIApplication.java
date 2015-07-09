package com.relic.app.UI;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

/**
 * Created by Jason on 6/12/15.
 */
@SpringBootApplication
@ComponentScan
@EnableZuulProxy
@EnableRedisHttpSession
@RestController
public class UIApplication {


    public static void main(String[] args) {
        SpringApplication.run(UIApplication.class, args);
    }


    @PostConstruct
    public void init() {

    }

}
