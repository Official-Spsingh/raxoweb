import React from 'react'
import { Modal } from 'antd'

export default function LoginSignUpContainer({ visible, setModalVisible }) {
    return (
        <Modal
            visible={visible}
            onCancel={() => setModalVisible(false)}
            footer={null}
            closable={false}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}
