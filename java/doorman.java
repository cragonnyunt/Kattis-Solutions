import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class doorman {
	static club c = new club();
	static Gender toGender(char c) {
		return c == 'M' ? Gender.M : Gender.W;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int X = scan.nextInt();
		String queue = scan.next();
		int index = 0;
		while (index < queue.length()) {
			if (c.getDifference() < X) {
				if (!c.trackedIndex.contains(index))
					c.letinPeople(toGender(queue.charAt(index)), index);
				index++;
			} else if (c.getDifference() == X) {
				if (Math.abs(index - Collections.max(c.trackedIndex)) > 2)
					break;
				if (c.moreGender != toGender(queue.charAt(index)) && !c.trackedIndex.contains(index)) {
					c.letinPeople(toGender(queue.charAt(index)), index);
					index = 0;
				} else
					index++;
			} else
				break;
		}
		System.out.println(c.getPeople());
		scan.close();
	}
}

enum Gender {
	M, W
}

class club {

	int Men_Count, Women_Count;
	public Gender moreGender;
	public ArrayList<Integer> trackedIndex = new ArrayList<>();

	public int getDifference() {
		return Math.abs(Men_Count - Women_Count);
	}

	public int getPeople() {
		return Men_Count + Women_Count;
	}

	public void letinPeople(Gender g, int index) {
		if (g == Gender.M)
			Men_Count++;
		else
			Women_Count++;
		trackedIndex.add(index);
		moreGender = (Men_Count > Women_Count) ? Gender.M : Gender.W;
	}
}
