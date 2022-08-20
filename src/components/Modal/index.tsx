import './styles.css';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal ({ onClose = () => {}, children}: IProps) {
  return (
    <div
      className="modal" onClick={onClose}>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}