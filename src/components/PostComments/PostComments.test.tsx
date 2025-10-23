import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('insere dois comentários', () => {
    render(<PostComment />);

    // Seleciona os elementos usando data-testid
    const textarea = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-button');

    // Insere o primeiro comentário
    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    // Insere o segundo comentário
    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    // Verifica se os dois comentários estão no documento
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});