import java.util.Scanner;

public class hittingtargets {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int m = scan.nextInt();
		Shape[] s = new Shape[m];
		for (int i = 0; i < m; i++)
			if (scan.next().equals("rectangle"))
				s[i] = new Rectangle(scan.nextInt(), scan.nextInt(), scan.nextInt(), scan.nextInt());
			else
				s[i] = new Circle(scan.nextInt(), scan.nextInt(), scan.nextInt());
		int n = scan.nextInt();
		while (n-- > 0) {
			Target_Point pt = new Target_Point(scan.nextInt(), scan.nextInt());
			int count = 0;
			for (Shape sh : s)
				if (sh.isInside(pt))
					count++;
			System.out.println(count);
		}
		scan.close();
	}
}

interface Shape {
	boolean isInside(Target_Point pt);
}

class Target_Point {
	int x, y;

	public Target_Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public double getDistanceto(Target_Point pt) {
		int _x = x - pt.x;
		int _y = y - pt.y;
		return Math.sqrt(_x * _x + _y * _y);
	}
}

class Rectangle implements Shape {
	Target_Point pt1, pt2;

	public Rectangle(int x1, int y1, int x2, int y2) {
		pt1 = new Target_Point(x1, y1);
		pt2 = new Target_Point(x2, y2);
	}

	public boolean isInside(Target_Point pt) {
		return pt.x >= pt1.x && pt.y >= pt1.y && pt.x <= pt2.x && pt.y <= pt2.y;
	}
}

class Circle implements Shape {
	Target_Point centre;
	int radius;

	public Circle(int x, int y, int radius) {
		centre = new Target_Point(x, y);
		this.radius = radius;
	}

	public boolean isInside(Target_Point pt) {
		return centre.getDistanceto(pt) <= radius;
	}
}
