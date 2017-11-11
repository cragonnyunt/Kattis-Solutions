import java.util.Scanner;

public class hidden {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String password = scan.next();
		String data = scan.next();
		for (char c : data.toCharArray())
			if (password.contains(String.valueOf(c)))
				if (password.charAt(0) == c)
					password = password.substring(1);
				else
					break;
		System.out.println(password.isEmpty() ? "PASS" : "FAIL");
		scan.close();
	}
}
