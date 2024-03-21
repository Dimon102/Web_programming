import footerData from "../mockData/footerData";
import Logo from "../assets/img/logo.svg";

export const Header = ({header}) => {
  return <h1>{header}</h1>;
};

export const Button = ({buttonText}) => {
  return <button>{buttonText}</button>;
};

export const MenuStart = ({logoData}) => {
  const {logo, logoDescription} = logoData;
  const {alt, href} = logo;

  return (
    <>
      <div className="header__logo">
        <a href={href} className="logo__link">
          <img className="link__name" src={Logo} alt={alt} />
        </a>
      </div>
      <p>{logoDescription}</p>
    </>
  );
};

// export const Menulinks = ({footMenuItem}) => {
//   const {text} = footMenuItem;
//   return (
//     <a>{text}</a>
//   );
// };
  
// export const MenuItems = ({footMenuData}) => {
//   const {footMenuFirstItem, footMenuSecondItem, footMenuThirdtItem} = footMenuData;
//   console.log(footMenuFirstItem);

//   return (
//     <>
//       <div className="foot_menu_item">
//         <h3>Ссылки</h3>
//         {/* {footMenuFirstItem.map((item) => (
//           <Menulinks item={item} />
//         ))} */}
//       </div>
//       <div className="foot_menu_item">
//         <h3>Компания</h3>
//         {/* {footMenuSecondItem.map((item) => (
//           <Menulinks item={item} />
//         ))} */}
//       </div>
//       <div className="foot_menu_item foot_menu_items_end">
//         <h3>Контакты</h3>
//         {/* {footMenuThirdtItem.map((item) => (
//           <Menulinks item={item} />
//         ))} */}
//       </div>
//     </>
//   );
// };
const MenuLinks = ({href, text}) => <a href={href}>{text}</a>;

const MenuItems = ({footMenuItems}) => {
  const {footMenuFirstItem, footMenuSecondItem, footMenuThirdtItem} = footMenuItems;
  
  const firstItem = footMenuFirstItem.map((item) => <MenuLinks {...item} />);
  const secondItem = footMenuSecondItem.map((item) => <MenuLinks {...item} />);
  const thirdItem = footMenuThirdtItem.map((item) => <MenuLinks {...item} />);

  return (
    <>
      <div className="foot_menu_item">
        <h3>Ссылки</h3>
        {firstItem}
      </div>
      <div className="foot_menu_item">
        <h3>Компания</h3>
        {secondItem}
      </div>
      <div className="foot_menu_item foot_menu_items_end">
        <h3>Контакты</h3>
        {thirdItem}
      </div>
    </>
  );
};

export const Footer = () => {
  const {header,buttonText,logoDescription,logo,footMenuItems} = footerData;

  return (
    <>
      <div>
        <div className="go_to_feature">
          <Header header={header}/>
          <Button buttonText={buttonText}/>
        </div>
        <div className="foot_menu">
          <div className="foot_menu_start">
            <MenuStart logoData={{logo, logoDescription}}/>
          </div>
          <div className="foot_menu_items">
            <MenuItems footMenuItems={footMenuItems}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
