package com.relic.app.sitedog.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Map;

/**
 * Created by Phoenix on 15/7/7.
 */
@RestController
public class AuthController {

    @RequestMapping("/token")
    @ResponseBody
    public Map<String, String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }
}
