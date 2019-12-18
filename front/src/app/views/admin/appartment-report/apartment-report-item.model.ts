
export class ApartmentReportItem {

    public id: number;
    public appNumber: number;
    public date: string;
    public value: number;
    public price: number;
    public paid: boolean;


    constructor(id: number, appNumber: number, date: string, value: number, price: number, paid: boolean) {
        this.id = id;
        this.appNumber = appNumber;
        this.date = date;
        this.value = value;
        this.price = price;
        this.paid = paid;
    }

    public static heads() {
        return ['id', 'Квартира, №', 'Місяць, Рік', 'Витрачено', 'Вартість', 'Сплачено'];
    }
}
