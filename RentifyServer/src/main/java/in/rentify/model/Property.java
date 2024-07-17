package in.rentify.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Table;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Data
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String city;
    private String state;
    private String country;
    private Double area;
    private Double rent;
    private Integer bedrooms;
    private String propertyType;
    private String imageId;
    private Long ownerId;

    @OneToOne(mappedBy = "property", cascade = CascadeType.ALL)
    @JsonManagedReference
    private AdditionalDetails additionalDetails;
}
