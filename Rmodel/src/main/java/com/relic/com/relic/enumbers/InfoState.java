package com.relic.com.relic.enumbers;

/**
 * Created by Phoenix on 15/11/2.
 */
public enum InfoState {
    Hot("Hot"),
    Heat("Keep watching"),
    Alive("Alive"),
    Almost("Almost no view"),
    Dead("No more care");


    private String context;

    private String getContext() {
        return this.context;
    }

    InfoState(String context) {
        this.context = context;
    }
}
