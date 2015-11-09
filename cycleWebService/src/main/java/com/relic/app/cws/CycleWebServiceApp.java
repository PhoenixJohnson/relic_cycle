package com.relic.app.cws;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.system.ApplicationPidListener;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication
@Configuration
@EnableAutoConfiguration
public class CycleWebServiceApp {

    public static void main(String[] args) {
        SpringApplication springApplication =
                new SpringApplication(CycleWebServiceApp.class);
        springApplication.addListeners(
                new ApplicationPidListener("/relicRun/cycleWS.pid"));
        springApplication.run(args);
    }

}
