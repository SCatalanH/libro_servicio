package com.servicio.libro.service;

import com.servicio.libro.exception.NotFoundException;
import com.servicio.libro.model.Libro;
import com.servicio.libro.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroService {

    @Autowired
    private LibroRepository libroRepository;

    public List<Libro> obtenerTodos() {
        return libroRepository.findAll();
    }

    public Libro obtenerPorId(Long id) {
        return libroRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Libro con ID " + id + " no encontrado"));
    }

    public Libro crear(Libro libro) {
        return libroRepository.save(libro);
    }

    public Libro actualizar(Long id, Libro libroActualizado) {
        Libro libro = obtenerPorId(id);
        libro.setTitulo(libroActualizado.getTitulo());
        libro.setAutor(libroActualizado.getAutor());
        libro.setAnioPublicacion(libroActualizado.getAnioPublicacion());
        libro.setGenero(libroActualizado.getGenero());
        return libroRepository.save(libro);
    }

    public void eliminar(Long id) {
        Libro libro = obtenerPorId(id);
        libroRepository.delete(libro);
    }
}
