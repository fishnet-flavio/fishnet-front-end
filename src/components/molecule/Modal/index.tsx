import React, { useState } from "react";
import { styled } from "styled-components";
import BaseButton from "../../atom/BaseButton";

interface QuantityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (quantity: number) => void;
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    max-width: 90%;
`;

const QuantityModal: React.FC<QuantityModalProps> = ({ isOpen, onClose, onConfirm }) => {
const [quantity, setQuantity] = useState(1);

if (!isOpen) return null;

const handleConfirm = () => {
    onConfirm(quantity);
    onClose();
};

return (
    <ModalOverlay>
        <ModalContainer>
            <h2>Selecione a Quantidade</h2>
            <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            style={{ width: "100%", padding: "0.5rem", margin: "1rem 0" }}
            />
            <BaseButton onClick={handleConfirm}>Confirmar</BaseButton>
            <BaseButton onClick={onClose}>
                Cancelar
            </BaseButton>
        </ModalContainer>
    </ModalOverlay>
    );
};

export default QuantityModal;