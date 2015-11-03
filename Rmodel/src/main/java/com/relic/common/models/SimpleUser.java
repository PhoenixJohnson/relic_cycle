package com.relic.common.models;


import com.relic.com.relic.enumbers.Role;
import lombok.*;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


/**
 * Created by Phoenix on 15/11/3.
 */
@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
public class SimpleUser {

    @Id
    @GeneratedValue
    private Long id;

    private String username;

    private String password;

    private String email;

    private Role role;


}
