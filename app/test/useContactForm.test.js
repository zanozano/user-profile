import { renderHook, act } from '@testing-library/react-hooks';
import { useContactForm } from '../hooks/useContactForm';

describe('useContactForm', () => {
    it('debería manejar el envío del formulario correctamente', async () => {
        const { result } = renderHook(() => useContactForm());

        act(() => {
            result.current.handleChange({ target: { name: 'name', value: 'Cristobal' } });
            result.current.handleChange({ target: { name: 'email', value: 'hello@zanozano.com' } });
            result.current.handleChange({ target: { name: 'message', value: 'Mensaje de prueba' } });
        });

        await act(async () => {
            await result.current.handleSubmit({ preventDefault: () => { } });
        });

        expect(result.current.formData).toEqual({
            name: '',
            email: '',
            message: ''
        });
    });
});
