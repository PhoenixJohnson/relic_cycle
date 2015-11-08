package com.relic.app.cws.beans;

import com.relic.common.models.SimpleUser;
import lombok.*;
import org.bson.types.ObjectId;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Phoenix on 15/11/6.
 */
@Data
@NoArgsConstructor
@Getter
@Setter
public class ResponsePackage {

    private ObjectId coin;
    private boolean success;
    private List<Object> data;
    private SimpleUser su;
    private int pageSize;
    private int pageNumber;
    // message content and message type
    private HashMap<String, String> messages;
    // For the parameters that may need to added in the future.
    private HashMap<String, Object> extraFields;
}
