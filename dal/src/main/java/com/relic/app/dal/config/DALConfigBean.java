package com.relic.app.dal.config;

import java.io.*;
import java.util.Properties;

/**
 * Created by vizewang on 2015/9/29.
 */
public class DALConfigBean {
    private static DALConfigBean dalConfigBean = new DALConfigBean();
    private String host;
    private  String port;
    private  String username;
    private String password;

    public static DALConfigBean getInstance() {
        return dalConfigBean;
    }

    private DALConfigBean() {
        Properties prop = new Properties();
        InputStream in = null;
        try {
            in = new BufferedInputStream(new FileInputStream(DALConfigBean.class.getResource("/config.properties").getPath()));
            prop.load(in);
            host = prop.getProperty("HOST").trim();
            port = prop.getProperty("PORT").trim();
            username = prop.getProperty("USERNAME").trim();
            password = prop.getProperty("PASSWORD").trim();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String getHost() {
        return host;
    }

    public String getPort() {
        return port;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public static void main(String[] args) {

//        File file=new File("/");
//        System.out.println(file.getAbsolutePath());
//        File file=new File(DALConfigBean.class.getResource("/config.properties").getPath());
//        System.out.println(file.getAbsolutePath());
//        System.out.println(DALConfigBean.class.getResource("/"));
        System.out.println(getInstance().getHost());
    }
}
