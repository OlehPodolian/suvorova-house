export class ChartColor {

    public backgroundColor: any;
    public borderColor: any;
    public borderWidth: number;

    // backgroundColor: 'rgba(105, 0, 132, .2)',
    // borderColor: 'rgba(200, 99, 132, .7)',
    // borderWidth: 2,

    constructor(bgColor: any, borderColor: any, border: number) {
        this.backgroundColor = bgColor;
        this.borderColor = borderColor;
        this.borderWidth = border;
    }

    public static monitor() {
        return new ChartColor('rgba(128, 0, 0, 0.1)', 'rgba(128, 0, 0, 1)', 2);
    }


    public static navy() {
        return new ChartColor('rgba(0, 0, 128, 0.1)', 'rgba(0, 0, 128, 1)', 2);
    }

    public static blue() {
        return new ChartColor('rgba(0, 0, 225, 0.1)', 'rgba(0, 0, 225, 1)', 2);
    }

    public static green() {
        return new ChartColor('rgba(0, 128, 0, 0.1)', 'rgba(0, 128, 0, 1)', 2);
    }

    public static teal() {
        return new ChartColor('rgba(0, 128, 128, 0.1)', 'rgba(0, 128, 128, 1)', 2);
    }

    public static lime() {
        return new ChartColor('rgba(0, 255, 0, 0.1)', 'rgba(0, 255, 0, 1)', 2);
    }

    public static aqua() {
        return new ChartColor('rgba(0, 255, 255, 0.2)', 'rgba(0, 255, 255, 1)', 2);
    }

    public static maroon() {
        return new ChartColor('rgba(128, 0, 0, 0.1)', 'rgba(128, 0, 0, 1)', 2);
    }

    public static purple() {
        return new ChartColor('rgba(128, 0, 128, 0.1)', 'rgba(128, 0, 128, 1)', 2);
    }

    public static olive() {
        return new ChartColor('rgba(128, 128, 0, 0.1)', 'rgba(128, 128, 0, 1)', 2);
    }

    public static gray() {
        return new ChartColor('rgba(128, 128, 128, 0.1)', 'rgba(128, 128, 128, 1)', 2);
    }

    public static silver() {
        return new ChartColor('rgba(192, 192, 192, 0.1)', 'rgba(192, 192, 192, 1)', 2);
    }

    public static red() {
        return new ChartColor('rgba(255, 0, 0, 0.1)', 'rgba(255, 0, 0, 1)', 2);
    }

    public static fuchsia() {
        return new ChartColor('rgba(255, 0,  255, 0.1)', 'rgba(255, 0,  255, 1)', 2);
    }

    public static yellow() {
        return new ChartColor('rgba(255, 255, 0, 0.1)', 'rgba(255, 255, 0, 1)', 2);
    }

    public static brown() {
        return new ChartColor('rgba(102, 0, 0, 0.2)', 'rgba(102, 0, 0, 2)', 2);
    }


    public static structureColors(lengtn: number) {
        const colors = [
            this.navy(),
            this.blue(),
            this.green(),
            this.teal(),
            this.lime(),
            this.aqua(),
            this.maroon(),
            this.purple(),
            this.olive(),
            this.gray(),
            this.silver(),
            this.red(),
            this.fuchsia(),
            this.yellow(),
            this.brown()
        ];
        return colors.slice(0, lengtn);
    }
}
