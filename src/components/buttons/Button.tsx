interface Props {
  typeButton?: 'primary' | 'secondary' | 'tertiary'
  title: string;
  action?: () => void;
  icon?: React.ReactNode;
  style?: {};
}

const types = {
  primary: {
    backgroundColor: '#3483FA',
    color: '#FFFFFF'
  },
  secondary: {
    backgroundColor: '#009EE3',
    color: '#FFFFFF'
  },
  tertiary: {
    backgroundColor: 'rgba(65, 137, 230, .15)',
    color: '#009EE3'
  }
}

export const Button = ({ typeButton = 'primary', title, action, icon, style }: Props) => {
  return (
    <button
      onClick={action}
      className={`secondary-button flex justify-center items-center rounded-md`}
      style={{
        backgroundColor: types[`${typeButton}`].backgroundColor,
        color: types[`${typeButton}`].color,
        height: "48px",
        paddingRight: "24px",
        paddingLeft: "24px",
        fontSize: "16px",
        ...style,
      }}
    >
      {title}
      {icon && <div className="ml-3">{icon}</div>}
    </button>
  );
};
