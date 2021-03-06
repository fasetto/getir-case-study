class QueryBuilder {
  private parameters: Record<string, string> = {};

  public sort(field?: string) {
    if (field) {
      this.parameters = {
        ...this.parameters,
        _sort: field,
      };
    }

    return this;
  }

  public orderBy(type?: "asc" | "desc") {
    if (type) {
      this.parameters = {
        ...this.parameters,
        _order: type,
      };
    }

    return this;
  }

  public paginate(offset: number, limit: number) {
    this.parameters = {
      ...this.parameters,
      _start: offset.toString(),
      _limit: limit.toString(),
    };

    return this;
  }

  public filter(field?: string, value?: string) {
    if (field && value) {
      this.parameters = {
        ...this.parameters,
        [field + "_like"]: value,
      };
    }

    return this;
  }

  public toString() {
    let url = "";

    const entries = Object.entries(this.parameters);

    for (const entry of entries) {
      const name = encodeURIComponent(entry[0]);
      const value = encodeURIComponent(entry[1]);
      url += (url ? "&" : "?") + name + "=" + value;
    }

    return url;
  }
}

export default QueryBuilder;
