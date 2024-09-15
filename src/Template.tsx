import Header from './components/Header';
import './App.css';

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => (
  <>
    <Header />
    {children}
  </>
);

export default Template;
