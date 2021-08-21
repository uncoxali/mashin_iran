import Chart from '@assets/svg/Chart.svg';
import Document from '@assets/svg/Document.svg';
import Setting from '@assets/svg/Setting.svg';
import Location from '@assets/svg/Location.svg';
import Arrow from '@assets/svg/arrow-left.svg';

const filter = [
    { title: 'مشخصات فنی', icon: <Setting />, line: true },
    { name: 'برند', arrow: <Arrow /> },
    { name: 'مدل', arrow: <Arrow /> },
    { name: 'سال تولید', arrow: <Arrow /> },
    { title: 'مکان خودرو', icon: <Location />, line: true },
    { name: 'استان', arrow: <Arrow /> },
    { name: 'شهر', arrow: <Arrow /> },
    { title: ' مشخصات فنی خودرو', icon: <Document />, line: true },
    { name: 'نوع خودرو', arrow: <Arrow /> },
    { name: 'کیلومتر', arrow: <Arrow /> },
    { name: 'گیربکس', arrow: <Arrow /> },
    { name: 'سوخت', arrow: <Arrow /> },
    { name: 'وضعیت بدنه', arrow: <Arrow /> },
    { title: 'قیمت', icon: <Chart />, line: true },
];

export default filter;
