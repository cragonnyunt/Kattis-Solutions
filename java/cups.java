import java.util.Arrays;
import java.util.Scanner;

public class cups {
	static boolean isNumeric(String str) {
		for (char c : str.toCharArray())
			if (!Character.isDigit(c))
				return false;
		return true;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		scan.nextLine();
		cup[] c = new cup[N];
		for (int i = 0; i < N; i++) {
			String[] token = scan.nextLine().split(" ");
			if (isNumeric(token[0]))
				c[i] = new cup(Integer.parseInt(token[0]), token[1]);
			else
				c[i] = new cup(token[0], Integer.parseInt(token[1]));
		}
		Arrays.sort(c);
		for (cup cs : c)
			System.out.println(cs);
		scan.close();
	}
}

class cup implements Comparable<cup> {
	String color;
	int diameter;

	private cup(String color) {
		this.color = color;
	}

	public cup(String color, int radius) {
		this(color);
		diameter = 2 * radius;
	}

	public cup(int diameter, String color) {
		this(color);
		this.diameter = diameter;
	}

	public int compareTo(cup o) {
		return Integer.compare(diameter, o.diameter);
	}

	public String toString() {
		return color;
	}
}
