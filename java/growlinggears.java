import java.util.Scanner;

public class growlinggears {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int n = scan.nextInt();
			double maxTorque = Double.MIN_VALUE;
			int index = -1;
			for (int j = 1; j <= n; j++) {
				int a = scan.nextInt();
				int b = scan.nextInt();
				int c = scan.nextInt();
				double torque = -(b * b / (4 * a)) + (b * b / (2 * a)) + c;
				if (maxTorque < torque) {
					maxTorque = torque;
					index = j;
				}
			}
			System.out.println(index);
		}
		scan.close();
	}
}
