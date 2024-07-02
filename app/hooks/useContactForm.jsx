import { useState } from 'react';
import Swal from 'sweetalert2'

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setFormData({
                ...formData,
                [name]: value.trim()
            });
        } else if (name === 'email') {
            setFormData({
                ...formData,
                [name]: value
            });
        } else {
            setFormData({
                ...formData,
                [name]: value.trim()
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            Swal.fire({
                icon: 'error',
                title: 'Falta el nombre',
                text: 'Por favor, ingresa tu nombre.'
            });
            return;
        }

        if (!email || !emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Falta el email',
                text: 'Por favor, ingresa un email válido.'
            });
            return;
        }

        if (!message) {
            Swal.fire({
                icon: 'error',
                title: 'Falta el mensaje',
                text: 'Por favor, ingresa tu mensaje.'
            });
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tu mensaje ha sido enviado",
            showConfirmButton: false,
            timer: 1500
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return {
        formData,
        handleChange,
        handleSubmit
    };
};
