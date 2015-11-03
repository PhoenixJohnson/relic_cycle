package com.relic.com.relic.enumbers;

/**
 * Created by Phoenix on 15/11/3.
 */
public enum Privacy {

    //TODO
    LEVEL1(2),
    LEVEL2(8),
    LEVEL3(32),
    LEVEL4(64),
    LEVEL5(1024);


    private int stateFlag;

    private int getContext() {
        return this.stateFlag;
    }

    Privacy(int stateFlag) {
        this.stateFlag = stateFlag;
    }
}
