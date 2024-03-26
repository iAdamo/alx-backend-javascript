/* eslint-disable @typescript-eslint/no-namespace */
namespace Subjects {
  export class Subject {
    private _teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
