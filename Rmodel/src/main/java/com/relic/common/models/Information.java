package com.relic.common.models;

import com.relic.com.relic.enumbers.InfoLevel;
import com.relic.com.relic.enumbers.InfoState;
import com.relic.com.relic.enumbers.InfoType;
import com.relic.com.relic.enumbers.TagType;
import lombok.*;
import org.bson.types.ObjectId;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * Created by Phoenix on 15/6/29.
 */
@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
public class Information {

    @Id
    private ObjectId _id;
    private InfoType infoType;
    private String title;
    private String shortDescription;
    //用户查询用关键字，可以由用户自行为自己信息打上关键字，使得被别人更容易搜索到
    private HashMap<String, Object> keyMap;
    private String description;
    private String preview;
    //STRING URL, STRING DESCRIPTION
    private LinkedHashMap<String, String> pics;
    private LinkedHashMap<String, String> videos;
    private LinkedHashMap<String, String> audio;
    private TagType tagType;
    private boolean readOnly;
    private BigDecimal price;
    private boolean headFreeze;
    private String seedKey;
    private String owner;
    private String publisherSource;
    private boolean transmit;
    private String transmitInfo;
    private List<String> categoryId;
    private HashMap<String, Object> attributeId;
    private String orgId;
    private int readTimes;
    private int likeTimes;
    private int dislikeTimes;
    private int commentTimes;
    private Date publishDate;
    private Date lastModifiedDate;
    private Date createDate;
    private boolean bidFlag;
    private int bidStep;
    private int bidStartPrice;
    private int bidLimitPrice;
    private Date bidEndDate;
    private int bidTimes;
    private String sourceDevice;
    private InfoLevel infoLevel;
    private InfoState infoState;
    private String countryEnum;


    @Override
    public String toString() {
        return "Information{" +
                "_id=" + _id +
                ", infoType=" + infoType +
                ", title='" + title + '\'' +
                ", shortDescription='" + shortDescription + '\'' +
                ", keyMap=" + keyMap +
                ", description='" + description + '\'' +
                ", preview='" + preview + '\'' +
                ", pics=" + pics +
                ", videos=" + videos +
                ", audio=" + audio +
                ", tagType=" + tagType +
                ", readOnly=" + readOnly +
                ", price=" + price +
                ", headFreeze=" + headFreeze +
                ", seedKey='" + seedKey + '\'' +
                ", owner='" + owner + '\'' +
                ", publisherSource='" + publisherSource + '\'' +
                ", transmit=" + transmit +
                ", transmitInfo='" + transmitInfo + '\'' +
                ", categoryId=" + categoryId +
                ", attributeId=" + attributeId +
                ", orgId='" + orgId + '\'' +
                ", readTimes=" + readTimes +
                ", likeTimes=" + likeTimes +
                ", dislikeTimes=" + dislikeTimes +
                ", commentTimes=" + commentTimes +
                ", publishDate=" + publishDate +
                ", lastModifiedDate=" + lastModifiedDate +
                ", createDate=" + createDate +
                ", bidFlag=" + bidFlag +
                ", bidStep=" + bidStep +
                ", bidStartPrice=" + bidStartPrice +
                ", bidLimitPrice=" + bidLimitPrice +
                ", bidEndDate=" + bidEndDate +
                ", bidTimes=" + bidTimes +
                ", sourceDevice='" + sourceDevice + '\'' +
                ", infoLevel=" + infoLevel +
                ", infoState=" + infoState +
                ", countryEnum='" + countryEnum + '\'' +
                '}';
    }


}
