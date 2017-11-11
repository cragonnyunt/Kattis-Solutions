import java.util.Scanner;

public class quiteaproblem {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextLine())
			System.out.println(scan.nextLine().toLowerCase().contains("problem") ? "yes" : "no");
		scan.close();
	}
}
