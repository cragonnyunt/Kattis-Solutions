import java.util.ArrayList;
import java.util.Scanner;

public class doorman {
	static int Men_Count, Women_Count;
	static char moreGender;
	static ArrayList<Integer> trackedIndex = new ArrayList<>();
	static int maxIndex = -1;

	static void letinPeople(char g, int index) {
		if (g == 'M')
			Men_Count++;
		else
			Women_Count++;
		trackedIndex.add(index);
		if(maxIndex < index)
			maxIndex = index;
		moreGender = (Men_Count > Women_Count) ? 'M' : 'W';
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int X = scan.nextInt();
		String queue = scan.next();
		int index = 0;
		while (index < queue.length()) {
			int difference = Math.abs(Men_Count - Women_Count);
			if (difference < X) {
				if (!trackedIndex.contains(index))
					letinPeople(queue.charAt(index), index);
				index++;
			} else if (difference == X) {
				if (index - maxIndex > 2)
					break;
				if (moreGender != queue.charAt(index) && !trackedIndex.contains(index)) {
					letinPeople(queue.charAt(index), index);
					index = 0;
				} else
					index++;
			} else
				break;
		}
		System.out.println(Men_Count + Women_Count);
		scan.close();
	}
}
