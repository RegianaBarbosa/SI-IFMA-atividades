package edu.ifma.lpweb.imobiliaria.domain.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Data
@Getter @Setter
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Cliente {
   
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank @Size(max= 60)
    private String nome;

    @NotBlank @Size(max= 11)
    private String cpf;

    @NotBlank @Size(min= 8, max= 20)
    private String  telefone;

    @NotBlank @Size(max= 100)
    private String email;

    @Column(name="data_nasc")
    private LocalDate dataNasc;  

}