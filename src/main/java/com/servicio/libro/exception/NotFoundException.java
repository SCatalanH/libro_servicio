package com.servicio.libro.exception;

public class NotFoundException extends RuntimeException {

    public NotFoundException(String mensaje) {
        super(mensaje);
    }
}