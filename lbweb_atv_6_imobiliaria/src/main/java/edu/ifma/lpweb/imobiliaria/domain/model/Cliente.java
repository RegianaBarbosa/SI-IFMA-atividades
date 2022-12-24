package edu.ifma.lpweb.imobiliaria.domain.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Getter @Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Cliente {
    @EqualsAndHashCode.Include
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank @Size(max= 60)
    private String nome;

    @NotBlank
    private String cpf;

    @NotBlank @Size(min= 8, max= 20)
    private String  telefone;

    @NotBlank @Email @Size(max= 100)
    private String email;

    @NotBlank @DateTimeFormat
    private Date dt_nasc;

}