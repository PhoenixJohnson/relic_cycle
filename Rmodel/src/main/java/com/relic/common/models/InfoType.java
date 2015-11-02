package com.relic.common.models;

/**
 * Created by Phoenix on 15/11/2.
 */
public enum InfoType {
    A("article"),
    N("news"),
    P("pictures"),
    D("discussion"),
    S("statement"),
    V("video"),
    AU("audio");

    private String context;

    private String getContext() {
        return this.context;
    }

    InfoType(String context) {
        this.context = context;
    }
}
