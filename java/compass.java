import java.util.Scanner;

public class compass {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int start = scan.nextInt();
		int end = scan.nextInt();
		int needle = end - start;
        if (needle > 180)
            needle -= 360;
        else if (needle <= -180)
            needle += 360;
		System.out.println(needle);
		scan.close();
	}
}
