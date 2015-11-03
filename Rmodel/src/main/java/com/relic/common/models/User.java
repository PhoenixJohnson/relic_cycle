package com.relic.common.models;

import com.relic.com.relic.enumbers.Achievements;
import com.relic.com.relic.enumbers.Privacy;
import lombok.*;
import org.bson.types.ObjectId;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Phoenix on 15/6/29.
 */


@Entity
@Data
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor(staticName = "of")
public class User {
    @Id
    private ObjectId _id;
    private String name;
    private String nickName;
    private transient String password;
    private String email;
    private Date birthday;
    private String phoneNumber;
    private String address;
    private String country;
    private HashMap<String, String> questionAnswer;
    private HashMap<String, Object> clientSettings;
    private List<String> picList;
    private long age;
    private String sex;
    private String[] hobbies;
    private HashMap<String, Integer> innerMotions;
    private HashMap<String, Integer> innerEmotions;
    private HashMap<String, Integer> personality;
    private long level;
    private List<String> title;
    private int credits;
    private BigDecimal balance;
    private String[] bindBankCard;
    private List<String> quickPayAccount;
    private String accountStatus;
    private boolean logged;
    private HashMap<String, Object> attributes;
    private Date aliveDate;
    private String personalID;
    private Privacy privacy;
    private SimpleUser[] friends;
    private SimpleUser[] blackList;
    private SimpleUser[] whiteList;
    private Date createDate;
    //TODO need to build Group to instead the string below
    private HashMap<String, Date> groupJoinDate;
    //Stores the _ids of all kinds of entities.
    private List<String> attentionGroups;
    private List<String> attentionPersons;
    private List<String> attentionInformation;
    private Achievements achievements;


    @Override
    public String toString() {
        return "User{" +
                "_id=" + _id +
                ", name='" + name + '\'' +
                ", nickName='" + nickName + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", birthday=" + birthday +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", country='" + country + '\'' +
                ", questionAnswer=" + questionAnswer +
                ", clientSettings=" + clientSettings +
                ", picList=" + picList +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", hobbies=" + Arrays.toString(hobbies) +
                ", innerMotions=" + innerMotions +
                ", innerEmotions=" + innerEmotions +
                ", personality=" + personality +
                ", level=" + level +
                ", title=" + title +
                ", credits=" + credits +
                ", balance=" + balance +
                ", bindBankCard=" + Arrays.toString(bindBankCard) +
                ", quickPayAccount=" + quickPayAccount +
                ", accountStatus='" + accountStatus + '\'' +
                ", logged=" + logged +
                ", attributes=" + attributes +
                ", aliveDate=" + aliveDate +
                ", personalID='" + personalID + '\'' +
                ", privacy=" + privacy +
                ", friends=" + Arrays.toString(friends) +
                ", blackList=" + Arrays.toString(blackList) +
                ", whiteList=" + Arrays.toString(whiteList) +
                ", createDate=" + createDate +
                ", groupJoinDate=" + groupJoinDate +
                ", attentionGroups=" + attentionGroups +
                ", attentionPersons=" + attentionPersons +
                ", attentionInformation=" + attentionInformation +
                ", achievements=" + achievements +
                '}';
    }
}
