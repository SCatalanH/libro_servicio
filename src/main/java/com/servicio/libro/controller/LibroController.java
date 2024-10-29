package com.servicio.libro.controller;

import com.servicio.libro.model.Libro;
import com.servicio.libro.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/libros")
@Validated
public class LibroController {

    @Autowired
    private LibroService libroService;

    // Permite acceso a USER y ADMIN
    @GetMapping
    public List<Libro> listar() {
        return libroService.obtenerTodos();
    }

    // Permite acceso a USER y ADMIN
    @GetMapping("/{id}")
    public ResponseEntity<Libro> obtener(@PathVariable Long id) {
        Libro libro = libroService.obtenerPorId(id);
        return ResponseEntity.ok(libro);
    }

    // Solo ADMIN puede crear
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Libro> crear(@Valid @RequestBody Libro libro) {
        Libro nuevoLibro = libroService.crear(libro);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoLibro);
    }

    // Solo ADMIN puede actualizar
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Libro> actualizar(@PathVariable Long id, @Valid @RequestBody Libro libro) {
        Libro libroActualizado = libroService.actualizar(id, libro);
        return ResponseEntity.ok(libroActualizado);
    }

    // Solo ADMIN puede eliminar
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        libroService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
