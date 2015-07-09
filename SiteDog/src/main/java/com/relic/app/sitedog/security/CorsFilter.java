package com.relic.app.sitedog.security;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 * Created by Phoenix on 15/7/7.
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletResponse res = (HttpServletResponse) response;
        HttpServletRequest req = (HttpServletRequest) request;
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:7999");
        res.setHeader("Access-Control-Allow-Methods", "POST,PUT,GET,OPTIONS,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "x-auth-token,x-requested-with");
        res.setHeader("Access-Control-Max-Age", "3600");
        if (req.getMethod() != "OPTIONS") {
            chain.doFilter(request, response);
        } else {

        }

    }

    @Override
    public void destroy() {

    }
}
