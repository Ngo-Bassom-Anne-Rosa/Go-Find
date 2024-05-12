import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "object")
public class object {
    @ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String type;
    private String marque;
    private String modele;
    private String numeroSerie;
    private String description;
    private LocalDate dateVol;
    private String photoUrl;


    
}
