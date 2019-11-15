import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';



/////////




////


// var img_state = this.state = {state: 0};
//
// var change_state = () => {
//   this.setState({state: 1});
// };
//
// if img_state == 0 {
//   pass
// }
// else if img_state == 1 {
// BG
// }
//



function Event_handler(banner_id) {
  alert(banner_id);
  console.log(banner_id);
  if (banner_id == 1) {
    this.setState({1})
  }
  if else  (banner_id == 2) {
    this.setState({2})
  }
  if else  (banner_id == 3) {
    this.setState({3})
  }
  if else  (banner_id == 4) {
    this.setState({4})
  }
}
// onClick={Event_handler(1)}
const BannerSection = ({
                         row,
                         col,
                         title,
                         btnStyle,
                         description,
                         discountText,
                         discountAmount,
                         outlineBtnStyle,
                         state

                       }) => {
  const ButtonGroup = () => (
      <Fragment>
        <Button title="Server1" {...btnStyle} onClick={() => Event_handler(1 )}/>
        <Button title="Server2" {...btnStyle} onClick={() => Event_handler(2 )}/>
        <Button title="Server3" {...btnStyle} onClick={() => Event_handler(3 )}/>
        <Button title="Srv4" {...btnStyle} onClick={() => Event_handler(4 )} />
      </Fragment>
  );

  // Добавить state в ьанер секцион мы будем менять его при хувере на новую кнопку, и в зависимости от  стейта мы будем менять
  // Прочитать документацию про стуал компонент


  //1)Functional component нужно сделать обычным компонентом(обычный компонент это класс, а стрелочный это функция)
  //2) Нужно ввести state
  //3) Нужно добавить Handler который будет слушать события на кнопку наведения курсора  и в зависимости на которую кнопку будет наведен курсор менять стейт
  //4) В зависимости от стейта поменять метод рендер (менять класс к примеру стейт бг1 нужно отобродать бг1)
  // javascript destructuring
  return (
      <BannerWrapper>
        <Particles />
        <Container>
          <Box className="row" {...row}>
            <Box className="col" {...col}>
              <DiscountLabel>
                <Text content="25% Discount" {...discountAmount} />
                <Text content="on every first project budget" {...discountText} />
              </DiscountLabel>
              <FeatureBlock
                  title={
                    <Heading
                        content="With Knowledge, Passion, Heart & Soul Agencies"
                        {...title}
                    />
                  }
                  description={
                    <Text
                        content="Agencies around the world are moving to the digital agencies. So, It is high time to introduce your agency digitaly ."
                        {...description}
                    />
                  }
                  button={<ButtonGroup />}

              />
            </Box>
          </Box>
        </Container>
      </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
