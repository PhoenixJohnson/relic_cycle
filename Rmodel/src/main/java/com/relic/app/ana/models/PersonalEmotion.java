package com.relic.app.ana.models;

/**
 * Created by yunjiang on 2015/6/17.
 */
/*
皆空
恐惧
惧怕
忧虑
哀伤
忧郁
悲愤
憎恨
厌恶
厌烦
愤怒
愤愤
烦恼
惊恐
害怕
紧张
失望
担心
苦恼
悲痛
悲惨
伤心
沮丧
悲观
堕落
颓废
接纳
认可
包容
惊奇
涣散
诧异
警惕
警觉
顿悟
安心
满足
静息
安逸
宁静
轻盈
疲乏
困倦
喜乐
惊喜
狂喜
活跃
兴奋
快乐
高兴
欣喜
愉快
欲望
 */

public enum PersonalEmotion {


    EMPTY("皆空",1),TERROR("恐惧", 2), DREAD("惧怕",3), ANXIOUS("忧虑",4),SAD("哀伤",5), MELANCHOLY("忧郁",6), GRIEF_AND_INDIGNATION("悲愤",7), HATE("憎恨",8),
    DETEST("厌恶",9), BOREDOM("厌烦",10), ANGER("愤怒",11), INDIGNATION("愤愤",12), ANNOYANCE("烦恼",13), TERRIFIED("惊恐",14), FEAR("害怕",15), TENSION("紧张",16), DISAPPOINT("失望",17), WORRIED("担心",18),
    TROUBLED("苦恼",19),SORROW("悲痛",20),MISERABLE("悲惨",21),HEART_BROKEN("伤心",22),DISMAY("沮丧",23),PESSIMISM("悲观",24),CORRUPT("堕落",25),DECADENCE("颓废",26),ADMIT("接纳",27),ACCEPTANCE("认可",28),
    FORGIVE("包容",29),WONDER("惊奇",30),LAX("涣散",31),ASTONISH("诧异",32),VIGILANT("警惕",33),ALERTNESS("警觉",34),INSIGHT("顿悟",35),RELIEVE("安心",36),SATISFY("满足",37),TRANQUILLIZATION("静息",38),EASE("安逸",39),
    TRANQUILITY("宁静",40),LIGHT("轻盈",41),FATIGUE("疲乏",42),SLEEPY("困倦",43),JOYFUL("喜乐",44),SURPRISE("惊喜",45),WILD_WITH_JOY("狂喜",46),VIVIDNESS("活跃",47),EXCITEMENT("兴奋",48),
    HAPPINESS("快乐",49),DELIGHTED("高兴",50),GLAD("欣喜",51),PLEASANT("愉快",52),DESIRE("欲望",53);
    private String name;
    private int index;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    private PersonalEmotion(String name, int index) {
        this.name = name;
        this.index = index;
    }

    public static String getName(int index) {
        for (PersonalEmotion c : PersonalEmotion.values()) {
            if (c.getIndex() == index) {
                return c.name;
            }
        }
        return null;
    }

    public static int getCount(){
        return values().length;
    }

}
