package com.relic.app.sitedog;


import com.relic.app.sitedog.security.CsrfHeaderFilter;
import com.relic.app.sitedog.security.StatelessAuthenticationFilter;
import com.relic.app.sitedog.security.StatelessLoginFilter;
import com.relic.app.sitedog.security.TokenAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.security.web.header.HeaderWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Jason on 6/13/15.
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private TokenAuthenticationService tokenAuthenticationService;

//    public WebSecurityConfig() {
//        super(true);
//    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

//    @Bean
//    @Override
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {


        http
                .httpBasic().disable()
                .headers().cacheControl().disable()
                .exceptionHandling().and()
                .servletApi().and()
//                .anonymous().and()
                .authorizeRequests()

                        //allow all static resources
//                .antMatchers("/favicon.ico", "/js/**", "/bower_components/**").permitAll()

                //allow anonymous GETs to index, login, signup page
                .antMatchers(HttpMethod.GET, "/", "/api/users/current").permitAll()

                //allow anonymous POSTs to login, signup
                .antMatchers(HttpMethod.POST, "/api/login", "/api/signup").permitAll()

                //authenticate all others
                .anyRequest().authenticated().and()

                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER).and()

                // custom JSON based authentication by POST of {"username":"<name>","password":"<password>"} which sets the token header upon authentication
                .addFilterBefore(new StatelessLoginFilter("/api/login", tokenAuthenticationService, userDetailsService, authenticationManager()), UsernamePasswordAuthenticationFilter.class)

                        // custom Token based authentication based on the header previously given to the client
                .addFilterBefore(new StatelessAuthenticationFilter(tokenAuthenticationService), UsernamePasswordAuthenticationFilter.class)

                .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)

                .csrf().csrfTokenRepository(csrfTokenRepository());




    }

    private CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName("X-XSRF-TOKEN");
        return repository;
    }



}
