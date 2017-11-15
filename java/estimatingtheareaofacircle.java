import java.util.Scanner;

public class estimatingtheareaofacircle {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		double radius = 0, marks = 0, circle = 0;
		while ((radius = scan.nextDouble()) != 0 | (marks = scan.nextDouble()) != 0
				| (circle = scan.nextDouble()) != 0) {
			double area = Math.PI * radius * radius;
			double estArea = 4 * radius * radius * circle / marks;
			System.out.println(String.format("%f %f", area, estArea));
		}
		scan.close();
	}
}
