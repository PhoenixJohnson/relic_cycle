package com.relic.app.dal.beans;

import org.mongodb.morphia.annotations.Id;

/**
 * Created by vizewang on 2015/9/13.
 */
public class Cuo {
    @Id
    private String id;

    private String firstName;
    private String lastName;

    public Cuo() {}

    public Cuo(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%s, firstName='%s', lastName='%s']",
                id, firstName, lastName);
    }
}
