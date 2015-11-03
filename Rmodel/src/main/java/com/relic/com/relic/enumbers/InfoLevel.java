package com.relic.com.relic.enumbers;

/**
 * Created by Phoenix on 15/11/2.
 */
public enum InfoLevel {

    SINGLE("Single"),
    RARE("Rare"),
    A("Level A"),
    B("Level B"),
    C("Level C"),
    D("Level D"),
    E("Level e");
    private String context;

    private String getContext() {
        return this.context;
    }

    InfoLevel(String context) {
        this.context = context;
    }
}
