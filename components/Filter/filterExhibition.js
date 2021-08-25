import Chart from '@assets/svg/Chart.svg';
import Document from '@assets/svg/Document.svg';
import Setting from '@assets/svg/Setting.svg';
import Location from '@assets/svg/Location.svg';
import Arrow from '@assets/svg/arrow-left.svg';

const filterExhibition = [
    { title: 'مکان خودرو', icon: <Location />, line: true },
    { name: 'استان', arrow: <Arrow /> },
    { name: 'شهر', arrow: <Arrow /> },
];

export default filterExhibition;
