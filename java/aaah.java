import java.util.Scanner;

public class aaah {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String jon = scan.next();
		String doc = scan.next();
		if (jon.lastIndexOf('a') >= doc.lastIndexOf('a'))
			System.out.println("go");
		else
			System.out.println("no");
		scan.close();
	}
}
