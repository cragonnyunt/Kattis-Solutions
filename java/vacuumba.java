import java.util.Scanner;

public class vacuumba {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		while (n-- > 0) {
			int m = scan.nextInt();
			double X = 0;
			double Y = 0;
			double direction = 90;
			while (m-- > 0) {
				double angle = scan.nextDouble();
				double distance = scan.nextDouble();
				direction += angle;
				double direction_radian = direction * Math.PI / 180;
				double radian_cos = Math.cos(direction_radian);
				double radian_sin = Math.sin(direction_radian);
                if (direction == 90)
                {
                    radian_cos = 0;
                    radian_sin = 1;
                }
                else if(direction == -90)
                {
                    radian_cos = 0;
                    radian_sin = -1;
                }
				X += distance * radian_cos;
				Y += distance * radian_sin;
			}
			System.out.println(X + " " + Y);
		}
		scan.close();
	}
}
