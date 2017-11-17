import java.util.Scanner;

public class alldifferentdirections {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		while ((n = scan.nextInt()) != 0) {
			scan.nextLine();
			Point[] pt_list = new Point[n];
			for (int i = 0; i < n; i++) {
				String[] dir_input = scan.nextLine().split(" ");
				Point pt = new Point(Double.parseDouble(dir_input[0]), Double.parseDouble(dir_input[1]));
				for (int j = 2; j < dir_input.length; j += 2) {
					double unit = Double.parseDouble(dir_input[j + 1]);
					switch (dir_input[j]) {
					case "start":
						pt.setDirection(unit);
						break;
					case "turn":
						pt.turnDirection(unit);
						break;
					default:
						pt.walk(unit);
						break;
					}
				}
				pt_list[i] = pt;
			}
			double x = 0.0;
			double y = 0.0;
			for (Point p : pt_list) {
				x += p.x;
				y += p.y;
			}
			Point avg_pt = new Point(x / pt_list.length, y / pt_list.length);
			double worse = 0.0;
			for (Point p : pt_list)
				worse = Math.max(worse, avg_pt.getDistance(p));
			System.out.printf("%f %f %f%n", avg_pt.x, avg_pt.y, worse);
		}
		scan.close();
	}
}

class Point {
	public double x, y;
	double dir;

	public Point(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public void setDirection(double dir) {
		this.dir = dir;
		this.dir %= 360;
		if (this.dir < 0)
			this.dir += 360;
	}

	public void turnDirection(double dir) {
		setDirection(this.dir + dir);
	}

	public void walk(double unit) {
		x += unit * Math.cos(dir * Math.PI / 180);
		y += unit * Math.sin(dir * Math.PI / 180);
	}

	public double getDistance(Point pt) {
		double X_d = pt.x - x;
		double Y_d = pt.y - y;
		return Math.sqrt(X_d * X_d + Y_d * Y_d);
	}
}
